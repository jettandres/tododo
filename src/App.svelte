<script lang="ts">
  import { fade, fly, slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  $: doing = [];
  $: done = [];

  let task = "";

  const onAdd = () => {
    doing = [...doing, task];
    task = "";
  };

  const onRemove = (item: string) => {
    doing = doing.filter((x) => x != item);
  };

  const onEnter = (e: KeyboardEvent): void => {
    if (e.key !== "Enter") return;
    onAdd();
  };

  const onComplete = (item: string) => {
    onRemove(item);
    done = [...done, item];
  };
</script>

<h1>Tododo</h1>

<main>
  <div class="input-container">
    <input placeholder="Enter task" bind:value={task} on:keydown={onEnter} />
    <button on:click={onAdd}>
      <p>Add</p>
    </button>
  </div>

  <div class="body">
    <div class="todo-container">
      DOING
      {#each doing as task}
        <div
          transition:slide={{ delay: 250, duration: 300, axis: "y" }}
          class="task-container"
        >
          <p>{task}</p>
          <button class="task-cta" on:click={() => onComplete(task)}>✔</button>
          <button class="task-cta" on:click={() => onRemove(task)}>✖</button>
        </div>
      {/each}
    </div>
    <div class="todo-container">
      DONE
      {#each done as task}
        <p
          transition:fly={{
            delay: 250,
            duration: 500,
            x: -200,
            easing: quintOut,
          }}
        >
          {task}
        </p>
      {/each}
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
  }
  .input-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 45px;
    margin-bottom: 16px;
  }
  input {
    margin-right: 8px;
  }
  button {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  .body {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .todo-container {
    flex: 1;
    border-width: 1px;
    padding: 16px;
    border-color: #ffffff;
    border-style: solid;
  }
  .task-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  .task-cta {
    padding: 0;
    height: 30px;
    width: 30px;
  }
</style>
