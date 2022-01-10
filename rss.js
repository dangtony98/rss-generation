const RSS = require('rss');

// TODO: get RSS for one episode down first
let feed = new RSS({
    title: 'Testing Title',
    description: 'TODO',
    feed_url: 'TODO',
    site_url: 'TODO'
});

feed.item({
    title: 'item title',
    description: 'item description',
    url: 'TODO',
    enclosure: {
        url: 'TODO'
    }
});

let xml = feed.xml({ indent: true });

console.log('rss');
console.log(xml);

// generateRSSFeedLink