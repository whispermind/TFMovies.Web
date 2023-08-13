declare interface Reffered<T> {
  ref?: React.ForwardedRef<T>;
}

declare interface StylesOverrides<T, S> {
  variants: {
    props: { variant: T };
    style: S
  }[];
}
