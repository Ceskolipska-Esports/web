<aside><slot /></aside>

<style lang="scss" scoped>
	@use "/globals";

	aside {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		align-items: end;
		align-content: center;

		background-color: globals.$button-background-color;
		border: 0.1rem solid globals.$subtle-outline;
		border-radius: 0.7rem;
		font-size: 1.5rem;

		height: 100%;
		padding: 1rem;

		color: globals.$less-important-text-color;
	}
</style>
