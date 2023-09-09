import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
    function increase () {
        props.count.value += 1
    }

    function decrease () {
        props.count.value -= 1
    }

    return (
        <div class="flex gap-8 py-6">
          <Button onClick={decrease}>-1</Button>
          <p class="text-3xl">{props.count}</p>
          <Button onClick={increase}>+1</Button>
        </div>
  );
}
