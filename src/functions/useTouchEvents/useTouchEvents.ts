import { useCallback, useRef, useState } from 'react'

interface PressHandlers<T> {
    onTouchHold?: (e: React.TouchEvent<T>) => any
    onTouch?: (e: React.TouchEvent<T>) => any
    holdDuration?: number
}

const useTouchEvents = <T>({ onTouch, onTouchHold, holdDuration = 600 }: PressHandlers<T>) => {
    const [longPressTriggered, setLongPressTriggered] = useState(false)

    const timeout = useRef<NodeJS.Timeout>()

    const start = useCallback(
        (e: React.TouchEvent<T>) => {
            e.persist()
            const clonedEvent = { ...e }

            timeout.current = setTimeout(() => {
                onTouchHold?.(clonedEvent)
                setLongPressTriggered(true)
            }, holdDuration);
        },

        [onTouchHold, holdDuration]
    )

    const clear = useCallback((
        e: React.TouchEvent<T>,
        shouldTriggerClick = true
    ) => {
        timeout.current && clearTimeout(timeout.current)
        shouldTriggerClick && !longPressTriggered && onTouch?.(e)

        setLongPressTriggered(false)
    },
        [onTouch, longPressTriggered]
    )

    return {
        onTouchStart: (e: React.TouchEvent<T>) => start(e),
        onTouchEnd: (e: React.TouchEvent<T>) => clear(e)
    }
}

export default useTouchEvents