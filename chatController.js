function changePage(targetPage){
    let page = model.app;

    page.currentPage = targetPage
    updateView();
}