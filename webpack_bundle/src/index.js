const importBtn = document.getElementById('import')
importBtn.addEventListener('click', () => {
    import('./title').then(res => {
        console.log(res)
    })
})