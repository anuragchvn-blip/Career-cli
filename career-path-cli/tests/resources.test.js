const ResourceLibrary = require('../src/resources/library');

describe('ResourceLibrary', () => {
    let resourceLibrary;

    beforeEach(() => {
        resourceLibrary = new ResourceLibrary();
        resourceLibrary.resources = [
            { title: 'JavaScript: The Good Parts', language: 'JavaScript', type: 'book' },
            { title: 'Learn Python the Hard Way', language: 'Python', type: 'book' },
            { title: 'React for Beginners', language: 'JavaScript', type: 'course' },
            { title: 'Python Crash Course', language: 'Python', type: 'course' }
        ];
    });

    test('should list all resources', () => {
        const resources = resourceLibrary.listResources();
        expect(resources.length).toBe(4);
    });

    test('should search resources by language', () => {
        const jsResources = resourceLibrary.searchResources('JavaScript');
        expect(jsResources.length).toBe(2);
        expect(jsResources).toEqual(expect.arrayContaining([
            expect.objectContaining({ title: 'JavaScript: The Good Parts' }),
            expect.objectContaining({ title: 'React for Beginners' })
        ]));
    });

    test('should search resources by type', () => {
        const bookResources = resourceLibrary.searchResources('book');
        expect(bookResources.length).toBe(2);
        expect(bookResources).toEqual(expect.arrayContaining([
            expect.objectContaining({ title: 'JavaScript: The Good Parts' }),
            expect.objectContaining({ title: 'Learn Python the Hard Way' })
        ]));
    });

    test('should return an empty array if no resources match', () => {
        const unknownResources = resourceLibrary.searchResources('Ruby');
        expect(unknownResources.length).toBe(0);
    });
});