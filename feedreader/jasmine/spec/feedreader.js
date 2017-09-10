$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('There are urls in the feeds and they are defined',function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe("");
            });
        });

        it('There are names in the feeds and they are defined',function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe("");
            });
        });
    });

    describe('The menu', function () {

        it('The menu is hidden by default',function () {
            expect(document.body.classList).toContain('menu-hidden');
        });

        it('The menu displays and hides when clicked',function () {
            $('.menu-icon-link').click();
            expect(document.body.classList).not.toContain('menu-hidden');

            $('.menu-icon-link').click();
            expect(document.body.classList).toContain('menu-hidden');
        });


    });

    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0,function () {
                done();
            });
        });

        it('should have at least one entry',function (done) {
            expect($('.entry').length).not.toBe(0);
            done();
        });

    });


    describe('New Feed Selection', function () {
        var content0,content1;
        beforeAll(function (done) {
            loadFeed(0, function () {
                content0 = $('.feed');
            });

            loadFeed(1, function () {
                content1 = $('.feed');
                done();
            });
        });

        it('Should display different data', function (done) {
            expect(content0).not.toBe(content1);
            done();
        });

    });

}());