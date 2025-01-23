import type { ReactNode } from 'react';

export type LoginProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Login({ children }: LoginProps) {
  return (
    <div>
      {children}
    </div>
  );
}
