import { Button } from "@components/ui/button";
import { useState } from "react";

interface CounterProps {
  initialCount: number;
  CountText: string;
  IncrementButtonText: string;
  DecrementButtonText: string;
}

export function Counter({ initialCount, CountText, IncrementButtonText, DecrementButtonText }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <p className="py-2">{CountText}: {count}</p>
      <div className="flex gap-2">
        <Button onClick={() => setCount(count + 1)}>{IncrementButtonText}</Button>
        <Button onClick={() => setCount(count - 1)}>{DecrementButtonText}</Button>
      </div>
    </div>
  );
}
