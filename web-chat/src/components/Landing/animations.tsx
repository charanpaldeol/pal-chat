
import { forwardRef, type ComponentType } from "react"
import { createStore } from "https://framer.com/m/framer/store.js@^1.0.0"
import { randomColor } from "https://framer.com/m/framer/utils.js@^0.9.0"

// Store for theming
const usePalStore = createStore({
    themeColor: "#4F46E5", // Tailwind Indigo-600
})

export function withMomentaryRotate(Component: any): ComponentType<any> {
    return forwardRef((props, ref) => {
        return (
            <Component
                ref={ref}
                {...props}
                animate={{ rotate: 5 }}
                transition={{ duration: 1 }}
            />
        )
    })
}

export function withSubtleHover(Component: any): ComponentType<any> {
    return forwardRef((props, ref) => {
        return <Component ref={ref} {...props} whileHover={{ scale: 1.03 }} />
    })
}

export function withDynamicThemeColor(Component: any): ComponentType<any> {
    return forwardRef((props, ref) => {
        const [store, setStore] = usePalStore()

        return (
            <Component
                ref={ref}
                {...props}
                animate={{
                    background: store.themeColor,
                }}
                onClick={() => {
                    setStore({ themeColor: randomColor() })
                }}
            />
        )
    })
}
