<!-- https://eugenkiss.github.io/7guis/tasks#crud -->

<script>
    import { backEndUrl } from "./main";
    import { onMount } from "svelte";

    const peopleTemp = [
        { first: "Hans", last: "Emil" },
        { first: "Max", last: "Mustermann" },
        { first: "Roman", last: "Tisch" },
    ];

    let data;
    let realData = {};
    let UserId = "";
    let Username = "";

    onMount(async () => {
        console.log(backEndUrl);
        const response = await fetch(backEndUrl + 'Users');
        data = await response.json();

        const currData = JSON.stringify(data);
        realData = currData;
        console.log(realData);
    });

    let people = peopleTemp;

    let prefix = "";
    let first = "";
    let last = "";
    let i = 0;

    $: filteredPeople = prefix
        ? people.filter((person) => {
              const name = `${person.last}, ${person.first}`;
              return name.toLowerCase().startsWith(prefix.toLowerCase());
          })
        : people;

    $: selected = filteredPeople[i];

    $: reset_inputs(selected);

    function create() {
        people = people.concat({ first, last });
        i = people.length - 1;
        first = last = "";
    }

    let object = {};


    // Post API call
    function submit() {
        console.log(object);

    // Update
    // Delete

    // const response = fetch(ACTION_URL, {
	// 			method: 'POST',
	// 			body: object
	// 		})
    }

    function update() {
        selected.first = first;
        selected.last = last;
        people = people;
    }

    function remove() {
        // Remove selected person from the source array (people), not the filtered array
        const index = people.indexOf(selected);
        people = [...people.slice(0, index), ...people.slice(index + 1)];

        first = last = "";
        i = Math.min(i, filteredPeople.length - 2);
    }

    function refresh() {
        // Remove selected person from the source array (people), not the filtered array
        // people = people.concat({ data, last });
        people = peopleTemp;
    }

    function reset_inputs(person) {
        first = person ? person.first : "";
        last = person ? person.last : "";
    }

</script>

<input placeholder="filter prefix" bind:value={prefix} />

<select bind:value={i} size={5}>
    {#each filteredPeople as person, i}
        <option value={i}>{person.last}, {person.first}</option>
    {/each}
</select>

<label><input bind:value={first} placeholder="first" /></label>
<label><input bind:value={last} placeholder="last" /></label>

<label><input bind:value={object.Username} placeholder="Test post api" /></label>


<div class="buttons">
    <button on:click={create} disabled={!first || !last}>create</button>
    <button on:click={update} disabled={!first || !last || !selected}
        >update</button
    >
    <button on:click={remove} disabled={!selected}>delete</button>
    <button on:click={refresh}>refresh</button>
    <button on:click={submit}>submit</button>
</div>

{#if realData != null}

{#each Object.entries(realData) as [i, x]}
  <h1>{i.UserId}</h1>
  <p>{i.Username}</p>
{/each}

{/if}

<style>
    * {
        font-family: inherit;
        font-size: inherit;
    }

    input {
        display: block;
        margin: 0 0 0.5em 0;
    }

    select {
        float: left;
        margin: 0 1em 1em 0;
        width: 14em;
    }

    .buttons {
        clear: both;
    }
</style>
