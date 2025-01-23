import type { ReactNode } from 'react';

export type Login1Props = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Login1({ children }: Login1Props) {
  return (
    <div>
      {children}
    </div>
  );
}
