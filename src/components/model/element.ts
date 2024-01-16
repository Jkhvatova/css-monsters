type CreateElement = (
  parent: HTMLElement,
  childType: string,
  params: Record<string, string>
) => HTMLElement;

export const createElement: CreateElement = (parent, childType, params) => {
  const child: HTMLElement = parent.appendChild(
    document.createElement(childType)
  );
  if (params) {
    Object.assign(child, params);
  }
  return child;
};
