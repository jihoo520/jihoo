//현재 파일에서는 checkBox와 label 컴포넌트를 만들어보자


let Todo = () => {
    return(
        //html 코드가 들어가는 부분
        //속성을 쓸떄 카멜케이스로 작성하기
        //onclick -> onClick
        //class -> className
        <div className="Todo">
            <input type="checkbox" id="todo0" name="todo0" value="todo0"/>
            {/* label 태그는 for속성에 name값으로 연결해서 어떤 요소와 연결될지 지정 */}
            <label for="todo0">Todo 컴포넌트 만들기</label>
        </div>
    )

}

export default Todo;