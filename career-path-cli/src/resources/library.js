class ResourceLibrary {
    constructor() {
        this.resources = [
            { language: 'JavaScript', title: 'Eloquent JavaScript', type: 'Book', link: 'https://eloquentjavascript.net/' },
            { language: 'Python', title: 'Automate the Boring Stuff with Python', type: 'Book', link: 'https://automatetheboringstuff.com/' },
            { language: 'Java', title: 'Effective Java', type: 'Book', link: 'https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/' },
            { language: 'JavaScript', title: 'JavaScript.info', type: 'Tutorial', link: 'https://javascript.info/' },
            { language: 'Python', title: 'Python.org', type: 'Tutorial', link: 'https://docs.python.org/3/tutorial/' },
            { language: 'Java', title: 'Java Programming and Software Engineering Fundamentals', type: 'Course', link: 'https://www.coursera.org/specializations/java-programming' }
        ];
    }

    searchResources(query) {
        return this.resources.filter(resource => 
            resource.language.toLowerCase().includes(query.toLowerCase()) || 
            resource.title.toLowerCase().includes(query.toLowerCase())
        );
    }

    listResources() {
        return this.resources;
    }
}

module.exports = ResourceLibrary;