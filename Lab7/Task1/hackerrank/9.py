import time
import sys

def slow_print(text, delay=0.08):
    """Печатает текст по одной букве с задержкой."""
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(delay)
    print()

title = "💓 Heartbeat 💓"
hook = """
[Hook 2x]
I wanted you to know
That I am ready to go, heartbeat
My heartbeat
I wanted you to know
Whenever you are around, can't speak
I can't speak
"""
verse1 = """
[Verse 1]
I know what your boy like
Skinny tie and a cuff tight
He go and make breakfast
You walk around naked
I might just text you
Turn your phone over, when it's all over
"""

print("🔥" + "=" * 40 + "🔥")
slow_print(f"       {title.center(20)}")
print("🔥" + "=" * 40 + "🔥\n")

slow_print(hook, delay=0.03)
print("🎤" + "-" * 38 + "🎤")
slow_print(verse1, delay=0.03)
print("🔥" + "=" * 40 + "🔥")

slow_print("\n✨ *The End* ✨", delay=0.1)
