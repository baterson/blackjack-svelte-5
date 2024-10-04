<div class="modal">
	<div class="modal-content">
		<h2>Use Landscape</h2>
	</div>
</div>

<style>
	.modal {
		display: none;
	}

	/* Основные стили модального окна */
	@media (max-width: 968px) and (orientation: portrait) {
		.modal {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-color: rgba(0, 0, 0, 0.8);
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 1000;
		}

		.modal-content {
			background-color: #fff;
			padding: 20px;
			border-radius: 10px;
			text-align: center;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		}

		h2 {
			color: #004d00;
			margin-bottom: 10px;
		}

		p {
			color: #333;
		}
	}
</style>
