import type { ReactNode } from 'react';

export type Login4Props = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Login4({ children }: Login4Props) {
  return (
    <div>
      {children}
    </div>
  );
}
