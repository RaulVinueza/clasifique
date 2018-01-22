const levels = [
{
    title: 'To Eat or Not to Eat?',
    classifications: ['Helpful', 'Not Helpful'],
    features: ['distanceFromOrchard', 'orchardSize', 'fruitSize', 'purpleOrangeContinuum'],
    data: [
    {fruitSize: 2, purpleOrangeContinuum: 3, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 5, purpleOrangeContinuum: 6, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 7, purpleOrangeContinuum: 4, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 10 , purpleOrangeContinuum: 10, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 13 , purpleOrangeContinuum: 8, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 28, purpleOrangeContinuum: 23, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 20, purpleOrangeContinuum: 26, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 24, purpleOrangeContinuum: 27, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 27, purpleOrangeContinuum: 22, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 5 , purpleOrangeContinuum: 25, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 3 , purpleOrangeContinuum: 21, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 9 , purpleOrangeContinuum: 20, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 20 , purpleOrangeContinuum: 4, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 28 , purpleOrangeContinuum: 2, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0},
    {fruitSize: 23 , purpleOrangeContinuum: 7, distanceFromOrchard: 0, orchardSize: 0, isTarget: 0}
    ]
},
{
    title: 'Truce Among Factions',
    classifications: ['Helpful', 'Not Helpful'],
    features: ['Allegiance'],
    data: [
        {allegiance: 2, isTarget: 0},
        {allegiance: 1, isTarget: 0},
        {allegiance: 3, isTarget: 0},
        {allegiance: 14, isTarget: 0},
        {allegiance: 15, isTarget: 0},
        {allegiance: 29, isTarget: 0},
        {allegiance: 28, isTarget: 0},
        {allegiance: 25, isTarget: 1},
        {allegiance: 26, isTarget: 1},
        {allegiance: 5, isTarget: 1},
        {allegiance: 6, isTarget: 1}
    ]}
]

export default levels
