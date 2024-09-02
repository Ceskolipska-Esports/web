<aside><slot /></aside>

<style lang="scss" scoped>
	@use "/globals";

	aside {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		align-items: end;
		align-content: center;

		font-size: 1.5rem;

		height: 100%;
		padding: 1rem;

		color: globals.$less-important-text-color;
	}
</style>
