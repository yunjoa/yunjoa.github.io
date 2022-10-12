---
layout: single
# layout: post
title:  "잔디 심고 싶어? jekyll를 folk 하지마세요"
categories: wow update
toc : true
author_profile: false
# sidebar:
#   nav:"docs"
# search : false
---

# post test
## TEST
### What I did 

jekyll 테마로 github blog 만들어 잔디심기


* jekyll테마를 folk해서 만든 github blog는 commit해도 잔디가 안심어진다.

folk한 레파지토리를 새로운 레파지토리에 <b>bare clone - mirror push</b>해서 커밋 이력까지 이동시키는 방법이 있다. 나는 생성한지 얼마 안되서 다 삭제하고 새로 만들었다.

https://jekyllthemes.io/free
http://jekyllthemes.org/ 

zip을 받아서 푼다. 



레파지토리를 만든다.

-> 깃허브아이디.github.io로 만들면 https://깃허브아이디.github.io로 접속할 수 있다.
-> 레파지토리이름 -> https://깃허브아이디.github.io/레파지토리이름 으로 접속한다





레파지토리 https를 복사한다
터미널로 들어가서 git clone 복사한 https를 쳐서 연결해준다.
폴더내에 깔린 파일을 다 삭제한다. (폴더 청소를 안하면 jekyll테마가 안깔린다)



->루비를 깐다

gem install jekyll bundler 다운받는다.
jekyll new ./ 

bundler install
bundle exec jekyll serve --trace


## md 미리보기

<b>Markdown All in One</b> 익스텐션을 받아서 md 파일을 미리보기하면서 작성할 수 있다.

## 로컬서버로 전체 웹페이지 보기

폴더에서 Windows PowerShell을 킨다. bundle exec jekyll serve를 키면 포트번호가 발급된다. localhost:포트번호로 들어가서 작업하면서 확인할 수 있다. 
*config의 변경사항은 로컬서버를 껏다 켜야 업데이트 된다.



### reference
<https://feb-dain.github.io/how-to-make-my-github-blog/>
