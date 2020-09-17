function formatDate() {
    let date = new Date(),
        day = '' + date.getDate(),
        month = '' + (date.getMonth() + 1),
        year = date.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    
        if (day.length < 2) 
        day = '0' + day;

    const d = [year, month, day].join('-')
    return(d);
}

export const categories = [
    {
        id: 'home',
        path: 'latest/' + formatDate(),
        name: 'Inicio'
    },
    {
        id: 'politics',
        path: 'news/category/1',
        name: 'Política'
    },
    {
        id: 'international',
        path: 'news/category/2',
        name: 'Internacional'
    },
    {
        id: 'tech',
        path: 'news/category/3',
        name: 'Tecnología'
    },
    {
        id: 'shows',
        path: 'news/category/4',
        name: 'Espectáculos'
    },
    {
        id: 'sports',
        path: 'news/category/5',
        name: 'Deportes'
    },
    {   
        id: 'design',
        path: 'news/category/6',
        name : 'Diseño',
    }
];