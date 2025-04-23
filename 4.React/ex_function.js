//flat([depth])
//중첩 배열을 주어진 깊이만큼 평탄화
const nested = [1,[2,[3,4]]];
console.log(nested.flat());
console.log(nested.flat(2));

//필터링
//filter
//결과가 true인 요소만 모아 새 배열로 반환


//집계
//reduce(calklback, initialValue)
//배열을 순회하며 누적 결과를 생성한다
const iArr = [1,2,3,4,5]
const total = iArr.reduce((acc,cur) => a);
console.log(total)