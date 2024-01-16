
const paginate = async (model, pageSize, pageLimit, search = {}, order = [], include = [], transform) => {
    try {
        const limit = parseInt(pageLimit, 10) || 10;
        const page = parseInt(pageSize, 10) || 1;
        console.log(page, limit)

        // crea un objeta de opciones
        let options = {};

        // verifica si hay datos en el objeto search
        if (Object.keys(search).length) {
            options = { options, ...search };
        }

        options['offset'] = getOffset(page, limit);

        options['limit'] = limit;


        // verifica si el arreglo order esta vacio
        if (order && order.length) {
            options['order'] = order;
        }

        // verificamos si include tiene datos para agregarlo a las opciones de la consulta
        if (include && include.length) {
            options['include'] = include
        }

        console.log(options)

        // toma el model y options para la consulta
        let { count, rows } = await model.findAndCountAll(options);

        // comprobar si transform es una función y no es nula
        if (transform && typeof transform === 'function') {
            rows = transform(rows);
        }

        if (page > getTotalPage(limit, count) && count > 0) {
            return {
                totalPage: getTotalPage(limit, count),
                error: true,
            }
        } else {
            return {
                previousPage: getPreviousPage(page),
                currentPage: page,
                nextPage: getNextPage(page, limit, count),
                totalPage: getTotalPage(limit, count),
                total: count,
                limit: limit,
                error: false,
                data: rows
            }
        }
    } catch (error) {
        console.log(error);
        return {
            error: true,
        }
    }
}

const getOffset = (page, limit) => {
    return (page * limit) - limit;
}

const getNextPage = (page, limit, total) => {
    if ((total / limit) > page) {
        return page + 1;
    }

    return null
}

const getPreviousPage = (page) => {
    if (page <= 1) {
        return null
    }
    return page - 1;
}

const getTotalPage = (limit, total) => {
    const totalP = Math.ceil(total / limit);
    return totalP
}

module.exports = {
    paginate
}
