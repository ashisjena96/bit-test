import type { ReactNode } from 'react';

export type Login3Props = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Login3({ children }: Login3Props) {
  return (
    <div>
      {children}
    </div>
  );
}
