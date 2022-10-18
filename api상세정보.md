#### static/product/id/413.json

<img src="/Users/amy/Projects/shoeprize-project/readmeImage/detailInfo.png" style="zoom:50%;" />

```
{
  "id": 아이디,
  "brandIcon": 브랜드 이미지,
  "brandName": 브랜드명,
  "releaseSiteCount": 발매처수 ,
  "images": 상품 썸네일 이미지,
  "name": 상품명 한글,
  "firstReleaseDate": 발매일
  "nameEn": 상품명 영문,
  "code": 제품코드,
  "price": 가격,
  "comment": 소개글,
  "views": 조회수,
  "applyCount": 총 응모 횟수
}
```



#### static/releases/413.json

<img src="/Users/amy/Projects/shoeprize-project/readmeImage/release.png" style="zoom:50%;" />

```
{
  "results": [
    {
    	"id": 아이디,
      "uuid": uuid,
      "type": 0 = 선착순, 1 = 응모,
      "isEvent": 이벤트 상품 
      "method": 공지 방법,
      "releaseMarket": {
        "name": 발매처 이름,
        "icon": 발매처 아이콘
      },
      "closedTimestamp": 응모 종료 시간,
      "shippingMethod": 수령 방법,
      "region": 발매 국가
    },
  ]
}
```



#### static/product_release/{uuid}

<img src="/Users/amy/Projects/shoeprize-project/readmeImage/layer.png" alt=" " style="zoom:50%;" />



```
{
  "uuid": uuid,
  "type": 0 = 선착순, 1 = 응모,
  "method": 공지 방법,
  "url": 응모 url,
  "mission": 유의사항,
  "price": 가격,
  "releaseMarket": {
    "name": 발매처 이름,
    "icon": 발매처 아이콘,
    "channels": [
      {
        "type": 채널 종류,
        "link": 채널 링크,
        "typeName": 채널 이름
      }
    ]
  },
  "closedTimestamp": 응모 종료 시간,
  "product": {
    "brandName": 브랜드명,
    "name": 상품명,
    "thumb": 상품섬네일,
    "code": 제품 코드
  },
  "shippingMethod": 수령 방법,
  "payMethod": 결제 방법
}

```
