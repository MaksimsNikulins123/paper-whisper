type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;

type Prev = [never, 0, 1, 2, 3, 4, 5];

// export type Dict = Record<string, unknown>;

export type Paths<T, D extends number = 5> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string
        ? T[K] extends object
          ? K | Join<K, Paths<T[K], Prev[D]>>
          : K
        : never;
    }[keyof T]
  : "";

// type Lang = "ru" | "en";

// type PromoCard = {
//   title: Record<Lang, string>;
//   desc: Record<Lang, string>;
//   alt: Record<Lang, string>;
//   img: string;
//   href: string;
// };