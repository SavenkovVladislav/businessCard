document.querySelectorAll('*[data-modal-link]').forEach(link => {
	link.addEventListener('click', function () {
		const data = link.getAttribute('data-modal-link')
		const modal = document.querySelector(`[data-modal-window = ${data}]`)
		modal.style.display = 'flex'

		const closeBtn = modal.querySelector('.project-modal__close')
		closeBtn.addEventListener('click', function () {
			modal.style.display = 'none'
		})
	})
})
