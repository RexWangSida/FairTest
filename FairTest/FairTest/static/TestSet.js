var testList = {
  // status: 0 not started, 1 finished, 2 failed, 3 outdated
  0: {
    name: "test 1",
    testId: "t0",
    status: 0,
    duration: 20,
    testSet: {
      questionNum: 7,
      question: {
        0: {
          title: "This is question 1",
          type: 0,
          choices: {
            0: "A1",
            1: "A2",
            2: "A3",
            3: "A4",
          },
          ans: null,
        },
        1: {
          title: "This is question 2",
          type: 1,
          ans: null,
        },
        2: {
          title: "this is question 3",
          type: 0,
          choices: {
            0: "choice A",
            1: "choice B",
            2: "choice C",
          },
          ans: null,
        },
        3: {
          title: "This is question 4",
          type: 0,
          choices: {
            0: "A1",
            1: "A2",
            2: "A3",
            3: "A4",
          },
          ans: null,
        },
        4: {
          title: "This is question 5",
          type: 0,
          choices: {
            0: "A1",
            1: "A2",
            2: "A3",
            3: "A4",
          },
          ans: null,
        },
        5: {
          title: "This is question 6",
          type: 1,
          ans: null,
        },
        6: {
          title: "This is question 7",
          type: 1,
          ans: null,
        },
      },
    },
  },
  1: {
    name: "test 2",
    testId: "t1",
    status: 0,
    duration: 20,
    testSet: {
      questionNum: 2,
      question: {
        0: {
          title: "This is question 1 of test 2",
          type: 0,
          choices: {
            0: "A1",
            1: "A2",
            2: "A3",
            3: "A4",
          },
          ans: null,
        },
        1: {
          title: "This is question 2 of test 2",
          type: 0,
          choices: {
            0: "A1",
            1: "A2",
            2: "A3",
            3: "A4",
          },
          ans: null,
        },
      },
    },
  },
  2: {
    name: "test 3",
    testId: "t2",
    status: 2,
    duration: 20,
  },
  3: {
    name: "test 4",
    testId: "t3",
    status: 3,
    duration: 20,
  },
};

export default testList;
