---
date: '2023-03-23'
title: 'Markdown 문법'
categories: ['learning']
summary: 'Markdown 설명서와 내가 몰랐던 부분'
thumbnail: './imgs/f565ef7316ed2ed097fcf0621b6fbd19.jpg'
---



내가 markdown 문법에서 몰랐던 것
= 

Markdown은 간결하고 가볍지만 모든 HTML 마크업을 대신하지 못한다.   

🥨 [마크다운 문법](https://gist.github.com/ihoneymon/652be052a0727ad59601) 참고

왜 다들 Markdown을 쓸까. git의 READ.ME 자식 때문 아닐까? ( `-´ )
***



### 줄바꿈과 공백

줄바꿈은 `<br>` 을 써도 되지만 탭을 두 번 누르면 줄바꿈이 된다. 

아니면 엔터 두 번!

<br><br>

공백을 주고 싶을 땐 `&nbsp;` 을 쓰던가. 

`<pre>공    백</pre>` 태그를 사용한다.


 

---


### 코드블럭 쓰기

__인라인 코드는 백틱 1개로 감싼다.__

백틱( ` )은 숫자판 1 왼쪽에 있다. 맥에서는 한/영 바꿔야 쓸 수 있다 

`코드`

<br>

<div class="callout">
  <pre>`코드`</pre>
</div>
<br><br>


__블럭 코드는 백틱 3개로 감싼다.__
   
```
("hello, world");
```



백틱 3개 넣고 언어형태를 적어주면 하이라이트 기능을 준다.
```java
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}

```

<div class="callout">
  <pre>
```java
  public class BootSpringBootApplication {
    public static void main(String[] args) {
      System.out.println("Hello, Honeymon");
    }
}
```</pre>
</div>




---


### 이미지 불러오기

![Alt text](https://i.pinimg.com/564x/10/0e/35/100e35f954f13a5a0178618ff27858be.jpg "optional title")

<div class="callout">
<pre>
![Alt text](이미지링크 주소 "optional title") 
</div>


<br><br>
이미지 사이즈 조절은 아래와 같이 태그를 쓴다.

<br>

<img src="https://i.pinimg.com/564x/10/0e/35/100e35f954f13a5a0178618ff27858be.jpg " width="150px"  title="px(픽셀) 크기 설정" alt="RubberDuck"></img><br>

```
<img src="이미지링크주소" width="150px"  alt="RubberDuck"></img>
```

---


### 링크걸기


__특정 글자에 링크 걸기__  [구글](https://google.com)    


__자체 링크 걸기__  <https://google.com>    


__이미지에 링크 걸기__

[![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png)](https://google.com/)



<div class="callout">

[특정 글자](링크 주소)

<링크주소>

[![대체 문자](이미지 주소)](링크 주소)


</div>



---



## 텍스트 강조



*피사의 사탑*    
_쓰러진다_   
**중요하니까**    
__굵게굵게__    
~마음의 소리~


```
*피사의 사탑*    
_쓰러진다_    
**중요하니까**    
__굵게굵게__    
~마음의 소리~
```


여기서<sup>윗글씨</sup> <br>
여기서<sub>아랫글씨</sub> <br>
<acronym title="여기에 뜻을 적어요">외계어</acronym>

```
여기서<sup>윗글씨</sup> <br>
여기서<sub>아랫글씨</sub> <br>
<acronym title="여기에 뜻을 적어요">외계어</acronym>
```


---


### 각주 달기

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi error quod libero corporis, iste sit nulla similique enim dignissimos asperiores, illo numquam architecto maxime ab tenetur repellendus, dicta sed officia.[^1]

```
… officia.[^1]

[^1]: 각주.
```


각주는 자동적으로 하단에 달린다.

[^1]: And here is the definition.



---

## 텍스트 정렬



<div style="text-align: left"> 왼쪽 </div>
<center>가운데</center>
<div style="text-align: right"> 오른쪽 </div>



```
<div style="text-align: left"> 왼쪽 </div>
<center>가운데</center>
<div style="text-align: right"> 오른쪽 </div>
```

마크다운에서는 center만 지원해준다.
