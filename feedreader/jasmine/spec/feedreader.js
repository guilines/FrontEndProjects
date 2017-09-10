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
            expect($('body').attr('class')).toContain('menu-hidden');
        });

        it('The menu displays and hides when clicked',function () {
            $('.menu-icon-link').click();
            expect($('body').attr('class')).not.toContain('menu-hidden');

            $('.menu-icon-link').click();
            expect($('body').attr('class')).toContain('menu-hidden');
        });


    });

    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0,function () {
                done();
            });
        });

        it('should have at least one entry',function (done) {
            expect($('.feed').children().length).not.toBe(0);
            done();
        });

    });

    allFeeds.forEach(function (feed,idx) {
        describe('New Feed Selection: '+ feed.name, function () {
            beforeEach(function (done) {
                loadFeed(idx, function () {
                    done();
                });
            });

            it('Should display '+feed.name+' section', function (done) {
                expect($('.header-title').text()).toBe(feed.name);
                done();
            });

        });
    });


}());
