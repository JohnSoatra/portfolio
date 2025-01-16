const Variables = {
    Name: {
        MinLength: 3,
        MaxLength: 15
    },
    Link: {
        MaxLength: 100,
    },
    MaxTran: 67,
    Duration: 2500,
    Easing: 'quartOut' as 'quartOut',
    Delay: 150,
    Default: {
        RequestDelay: 1000,
        RequestTries: 3,
    },
}

export default Variables;
