function feed(parent, args, context, info){
    return context.db.query.links({}, info)
}

module.export = {
    feed
}