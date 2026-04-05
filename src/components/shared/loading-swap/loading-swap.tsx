import { AlertCircleIcon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Loader } from "@/components/ui/loader/loader";

const contentVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 25 },
};

const stateVariants = {
    initial: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
};

const DEFAULT_STATE_DURATION = 2000;

const defaultSuccessElement = (
    <span className="flex items-center gap-2">
        <HugeiconsIcon icon={Tick02Icon} size={16} color="currentColor" />
        Success
    </span>
);

const defaultErrorElement = (
    <span className="flex items-center gap-2">
        <HugeiconsIcon icon={AlertCircleIcon} size={16} color="currentColor" />
        Error
    </span>
);

type State = "idle" | "pending" | "success" | "error";

export interface LoadingSwapProps {
    children: React.ReactNode;
    className?: string;
    isPending?: boolean;
    isError?: boolean | null;
    stateDuration?: number;
    pendingElement?: React.ReactNode;
    successElement?: React.ReactNode;
    errorElement?: React.ReactNode;
}

export function LoadingSwap({
    children,
    className,
    isPending = false,
    isError = false,
    stateDuration = DEFAULT_STATE_DURATION,
    pendingElement,
    successElement,
    errorElement,
}: LoadingSwapProps) {
    const [state, setState] = useState<State>(isPending ? "pending" : "idle");
    const prevIsPendingRef = useRef(isPending);

    const swapCopy = useMemo(
        () => ({
            pending: pendingElement ?? <Loader />,
            success: successElement ?? defaultSuccessElement,
            error: errorElement ?? defaultErrorElement,
            idle: null,
        }),
        [pendingElement, successElement, errorElement],
    );

    useEffect(() => {
        if (isPending) {
            setState("pending");
        } else {
            const wasPending = prevIsPendingRef.current;
            if (wasPending) {
                setState(isError ? "error" : "success");
                const timer = setTimeout(() => setState("idle"), stateDuration);
                prevIsPendingRef.current = isPending;
                return () => clearTimeout(timer);
            }
            setState("idle");
        }
        prevIsPendingRef.current = isPending;
    }, [isPending, isError, stateDuration]);

    return (
        <MotionConfig transition={{ type: "spring", duration: 0.3, bounce: 0 }}>
            <AnimatePresence mode="popLayout">
                <div
                    className={twMerge(
                        "relative flex items-center justify-center overflow-hidden",
                        className,
                    )}
                >
                    {["pending", "success", "error"].includes(state) && (
                        <motion.span
                            variants={stateVariants}
                            initial="initial"
                            animate="visible"
                            exit="hidden"
                            aria-hidden
                            className="absolute inset-0 flex items-center justify-center"
                            key={state}
                        >
                            {swapCopy[state]}
                        </motion.span>
                    )}
                    <motion.span
                        variants={contentVariants}
                        initial={false}
                        animate={state === "idle" ? "visible" : "hidden"}
                        exit="hidden"
                        className="flex items-center justify-center"
                    >
                        {children}
                    </motion.span>
                </div>
            </AnimatePresence>
        </MotionConfig>
    );
}
