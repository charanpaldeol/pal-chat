import { forwardRef, type ComponentType } from "react";
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0";
import { randomColor } from "https://framer.com/m/framer/utils.js@^0.9.0";

// Store to hold the background color state
const useColorStore = createStore({
  background: "#0099FF",
});

// Rotate the component 90 degrees on mount
export function withRotate<T>(Component: ComponentType<T>): ComponentType<T> {
  return forwardRef<any, T>((props, ref) => (
    <Component
      ref={ref}
      {...props}
      animate={{ rotate: 90 }}
      transition={{ duration: 2 }}
    />
  ));
}

// Slightly enlarge the component on hover
export function withHover<T>(Component: ComponentType<T>): ComponentType<T> {
  return forwardRef<any, T>((props, ref) => (
    <Component ref={ref} {...props} whileHover={{ scale: 1.05 }} />
  ));
}

// Randomize background color on click
export function withRandomColor<T>(Component: ComponentType<T>): ComponentType<T> {
  return forwardRef<any, T>((props, ref) => {
    const [store, setStore] = useColorStore();

    return (
      <Component
        ref={ref}
        {...props}
        animate={{ background: store.background }}
        onClick={() => {
          setStore({ background: randomColor() });
        }}
      />
    );
  });
}
