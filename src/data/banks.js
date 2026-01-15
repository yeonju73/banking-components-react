// data/banks.js
export const banks = [
  {
    id: "woori",
    label: "우리",
    code: "WR",
    color: "#003a8f",
    scoreRules: [
      {
        type: 'length',
        value: [11, 12, 13, 14],
        score: 20,
        reason: '통합 역사로 인해 다양한 계좌 길이'
      },
      {
        type: 'prefix',
        match: [
          '006', '007', '002', '004', '003', '005',
          '05', '06', '07', '08', '02', '01', '04',
          '15', '12', '13',
          '21', '24', '25', '09'
        ],
        position: 'start-2-or-3',
        score: 25,
        reason: '우리은행 및 구계좌 과목코드'
      },
      {
        type: 'virtualAccountHint',
        length: 14,
        score: 10,
        reason: '가상계좌 비중'
      }
    ]
  },
  {
    id: "toss",
    label: "토스뱅크",
    code: "TB",
    color: "#2254F6",
    scoreRules: [
      {
        type: 'length',
        value: 12,
        score: 35,
        reason: '토스 일반계좌는 12자리'
      },
      {
        type: 'length',
        value: 14,
        score: 25,
        reason: '토스 가상계좌는 14자리'
      },
      {
        type: 'prefix',
        match: ['100', '106', '200', '300', '150', '700', '190'],
        position: 'start-3',
        score: 40,
        reason: '토스 과목코드'
      }
    ]

  },
  {
    id: "kakao",
    label: "카카오뱅크",
    code: "B",
    color: "#FFE401",
    scoreRules: [
      {
        type: 'length',
        value: 13,
        score: 40,
        reason: '카카오뱅크는 현행 계좌가 항상 13자리'
      },
      {
        type: 'prefix',
        match: ['333', '388', '355', '310'],
        position: 'start-3',
        score: 25,
        reason: '일반계좌 과목코드'
      },
      {
        type: 'prefix',
        match: ['777', '979'],
        position: 'start-3',
        score: 20,
        reason: '가상계좌 과목코드'
      },
      {
        type: 'firstDigit',
        match: ['3', '7'],
        score: 10,
        reason: '업무구분은 3(일반) 또는 7(가상)'
      }
    ]

  },
];
