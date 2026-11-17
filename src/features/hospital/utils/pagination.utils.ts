export function generatePageButtons(totalPages: number, currentPage: number) {
    const Pagebuttons = [];
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            Pagebuttons.push({
                id: `page-${i}`,
                page: i,
                isClickable: true
            })
        }
        return Pagebuttons;
    }

    let isEllipseattached = false;
    for (let i = 1; i <= totalPages; i++) {
        if (i == 1 || i == totalPages || (i > 1 && i == currentPage - 1) || (i < totalPages && i == currentPage + 1)) {
            Pagebuttons.push({
                id: `page-${i}`,
                page: i,
                isClickable: true
            });
            continue;
        }
        if (i == currentPage) {
            Pagebuttons.push({
                id: `page-${i}`,
                page: i,
                isClickable: true
            });
            isEllipseattached = false;
        }
        if ((i > 1 && i < currentPage - 1) || (i < totalPages && i > currentPage + 1)) {
            if (!isEllipseattached) {
                Pagebuttons.push({
                    id: `ellipsis-${i}`,
                    page: '...',
                    isClickable: false
                })
            }
            isEllipseattached = true;
        }
    }
    return Pagebuttons;
}