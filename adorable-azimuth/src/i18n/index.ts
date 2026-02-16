export type Locale = "pt-br" | "en";

export type Messages = Record<string, string>;

const modules = import.meta.glob<Messages>("./**/*.json", { eager: true, import: "default" });

export function loadMessages(locale: Locale, namespace: string): Messages {
  const key = `./${locale}/${namespace}.json`;
  const messages = modules[key];
  if (!messages) {
    const available = Object.keys(modules).sort().join(", ");
    throw new Error(`i18n: missing messages file ${key}. Available: ${available}`);
  }
  return messages;
}

export function createT(messages: Messages, opts: { locale: Locale; namespace: string }) {
  const isDev = Boolean((import.meta as any).env?.DEV);

  return (key: string) => {
    const value = messages[key];
    if (typeof value === "string") return value;

    const msg = `i18n: missing key "${key}" in ${opts.locale}/${opts.namespace}.json`;
    if (isDev) throw new Error(msg);
    return `[[${opts.locale}:${opts.namespace}:${key}]]`;
  };
}

