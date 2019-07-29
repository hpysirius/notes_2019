const input = [
    { id: 1, name: 'l1' },
    { id: 2, name: 'l2', parentId: 1 },
    { id: 3, name: 'l3', parentId: 2 },
    { id: 4, name: 'l4', parentId: 3 },
    { id: 5, name: 'l1' },
];


const arrayToTree = (data, pid) => {
    const res = [];
    let temp;
    data.forEach(el => {
        if(el.parentId === pid){
            const obj = el;
            temp = arrayToTree(data, el.id);
            if(temp.length){
                obj.children = temp;
            }
            res.push(obj);
        }
    })
    return res;
}




console.log(arrayToTree(input));
// 输出
/**
[
    {
        id: 1,
        name: 'l1',
        children: [
            {
                id: 2,
                name: 'l2',
                parentId: 1,
                children: [
                    {
                        id: 3,
                        name: 'l3',
                        parentId: 2,
                        children: [
                            {
                                id: 4,
                                name: 'l4',
                                parentId: 3
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
*/