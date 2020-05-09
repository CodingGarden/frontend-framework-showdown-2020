<script>
	import getImages from './api.js';

	let searchTerm = '';
	let loading = false;
	let images = [];

	async function formSubmitted() {
		loading = true;
		images = [];
		images = await getImages(searchTerm);
		loading = false;
	}
</script>

<h1>Svelte Image Search</h1>
<form on:submit|preventDefault={formSubmitted}>
  <label for="searchTerm">Search Term</label>
  <input bind:value={searchTerm} class="u-full-width" type="text" id="searchTerm" name="searchTerm">
  <button type="submit">Search</button>
</form>
{#if loading}
	<img alt="loading" id="loadingImage" src="https://i.imgur.com/LVHmLnb.gif">
{/if}
<section class="images">
	{#each images as image}
		<img src={image} alt={searchTerm}>
	{/each}
</section>