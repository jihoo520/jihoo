// 동기처리
// 한번에 하나의 작업만 처리되며, 작업이 완료될 때 까지 다음 작업을 진행할 수 없다.
export const Sync = () => {

  const performHeavyTask = () => {
    return "두번째 작업 시작";
  }

  // 작업이 순차적으로 진행된다.
  console.log('첫번째 작업 시작')
  console.log(performHeavyTask());
  console.log('다음 작업 진행');
}

// 비동기처리
// 작업이 완료되기를 기다리지 않고, 다른 작업을 동시에 진행할 수 있다.
export const Async = () => {
  // console.log('첫 번째 작업 시작')
  // setTimeout(() => {
  //   console.log('첫번째 작업 완료')
  // }, 2000)
  // console.log('다음 작업 진행')

  // 콜백 함수 예제
  // function fetchData(callBack){
  //   setTimeout(() => {
  //     const data = '서버에서 받은 데이터';
  //     callBack(data); // 2초가 지난 후 콜백함수를 실행
  //   },2000)
  // }

  // console.log('API 요청 시작')
  // fetchData((result) => {
  //   console.log('API 응답 : ' ,result);
  // });
  // console.log('다음 작업 진행');

  // Promise 객체
  // const fetchData = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const success = true; // 성공 여부
  //       if(success) {
  //         resolve('데이터 받아옴');
  //       } else{
  //         reject('통신 실패');
  //       }
  //     }, 2000)
  //   });
  // }

  // console.log('API 요청 시작');

  
  // fetchData().then(data => {
  //   console.log('API 응답 : ', data)
  // }) // then() : Promise가 성공(resolve가 호출)하면 실행되는 콜백 함수.
  // .catch(error => {
  //   console.log('에러 : ', error)
  // });
  // console.log('다음 작업 진행')

  // 비동기함수 생성
  // const fetchData = async () => {
  //   return '데이터'
  // }

  // // const p = fetchData();
  // // console.log(p);

  // // 문자열을 반환하는 것 처럼 보이지만
  // // 실제로는 Promise 객체를 반환한다.
  // fetchData()
  //       .then(data => console.log(data));

  // await
  const fetchData = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('데이터 받아옴')
      })
    }, 2000)
  }

  const getData = async() => {
    console.log('API 요청 시작');
    const data = await fetchData();
    console.log('API 응답 : ', data);
    console.log('다음 작업 실행');
  }

  console.log('함수 밖 진행 전')
  getData();
  console.log('함수 밖 진행 후')
}