<script setup>
import { ref } from "vue";
import { Container } from "../demo/container.js";
import { getDependencies } from "../demo/decorators.js";
import { App, ApiClient, Logger, UserService } from "../demo/services.js";

const output = ref("");
const status = ref("idle");

function runDemo() {
  status.value = "running";

  try {
    const container = new Container();

    [Logger, ApiClient, UserService, App].forEach((Type) => {
      container.registerClass(Type, Type, {
        deps: getDependencies(Type),
      });
    });

    const app = container.resolve(App);
    output.value = app.start();
    status.value = "done";
  } catch (error) {
    output.value = error instanceof Error ? error.message : String(error);
    status.value = "error";
  }
}
</script>

<template>
  <div class="live-demo mt-4">
    <div class="live-demo__header">
      <button class="live-demo__button" @click="runDemo">
        Run in browser
      </button>
    </div>

    <pre class="live-demo__output"><code>{{ output || "Output will appear here." }}</code></pre>

    <div v-if="status === 'error'" class="live-demo__error">
      The demo threw an error. Keep this visible as a fallback while presenting.
    </div>
  </div>
</template>

<style scoped>
.live-demo {
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  padding: 16px;
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(8px);
}

.live-demo__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.live-demo__button {
  border: 0;
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 700;
  color: #111827;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
}

.live-demo__hint {
  font-size: 0.9rem;
  opacity: 0.8;
}

.live-demo__output {
  margin: 8px 0 0;
  border-radius: 12px;
  padding: 14px;
  white-space: pre-wrap;
  background: rgba(2, 6, 23, 0.95);
  color: #cbd5e1;
}

.live-demo__error {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #fca5a5;
}
</style>
