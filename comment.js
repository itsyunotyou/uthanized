var defaultThreads = [
    {
        id: 1,
        title: "Welcome!",
        author: "u",
        date: Date.now(),
        content: "Thread content",
        comments: [

        ]
    }

]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
} 