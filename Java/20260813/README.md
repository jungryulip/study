# DAY 19 — Java 예외 처리, 입출력과 스레드

> 2026-08-13 · 자원을 안전하게 다루고 여러 작업을 올바르게 함께 실행하기

## 오늘 배운 내용

- `try-catch`, 다중 `catch`, `finally`
- try-with-resources
- 바이트 스트림과 문자 스트림
- 기반 스트림과 보조 스트림
- `BufferedInputStream`, `BufferedOutputStream`
- `Thread` 상속과 `Runnable` 구현
- `sleep()`, `join()`, `interrupt()`
- 공유 자원과 `synchronized` 동기화

## 예외 처리

예외는 실행 중 발생해 정상 흐름을 방해하는 상황입니다. `try`에 예외 가능성이 있는
코드를 넣고, `catch`에서 예외 타입별 대응을 수행합니다.

```java
try {
    System.out.println(3 / 0);
} catch (ArithmeticException e) {
    System.out.println("0으로 나눌 수 없습니다: " + e.getMessage());
}
```

여러 `catch`를 사용할 때는 구체적인 하위 예외부터 처리하고 마지막에 더 넓은 상위
예외를 배치합니다. `finally`는 성공 여부와 상관없이 실행해야 하는 마무리 작업에
사용합니다.

## try-with-resources

파일이나 네트워크 연결처럼 사용 후 닫아야 하는 자원은 try-with-resources로
관리하면 안전합니다. `AutoCloseable`을 구현한 자원은 블록이 끝날 때 자동으로
`close()`됩니다.

```java
try (FileOutputStream output = new FileOutputStream("output.txt")) {
    output.write(65);
    output.write(66);
} catch (IOException e) {
    e.printStackTrace();
}
```

예외가 발생해도 자원이 닫히므로 `finally`에서 직접 `close()`를 호출하는 코드보다
간결하고 누락 가능성이 적습니다.

## Java 입출력 스트림

입출력 스트림은 데이터가 한 방향으로 흐르는 통로입니다.

| 구분 | 입력 | 출력 | 용도 |
| --- | --- | --- | --- |
| 바이트 스트림 | `InputStream` | `OutputStream` | 이미지·음악·압축 파일 등 |
| 문자 스트림 | `Reader` | `Writer` | 문자와 텍스트 파일 |

`FileInputStream`과 `FileOutputStream`은 파일을 바이트 단위로 읽고 씁니다.
`FileReader`와 `FileWriter`는 문자 인코딩을 고려해 텍스트를 다룹니다. `read()`가
`-1`을 반환하면 더 읽을 데이터가 없다는 뜻입니다.

## 기반 스트림과 BufferedStream

기반 스트림은 파일 같은 대상에 직접 연결됩니다. 보조 스트림은 다른 스트림을
감싸 기능이나 성능을 추가합니다.

```java
try (
    FileInputStream input = new FileInputStream("a.zip");
    FileOutputStream output = new FileOutputStream("copy.zip");
    BufferedInputStream bufferedInput = new BufferedInputStream(input);
    BufferedOutputStream bufferedOutput = new BufferedOutputStream(output)
) {
    int data;
    while ((data = bufferedInput.read()) != -1) {
        bufferedOutput.write(data);
    }
}
```

버퍼 스트림은 데이터를 모아서 처리해 저장 장치에 접근하는 횟수를 줄이므로 큰 파일
복사에서 성능을 높일 수 있습니다.

## 스레드 생성

프로세스는 실행 중인 프로그램이고, 스레드는 프로세스 안에서 작업을 수행하는 실행
단위입니다. Java에서는 `Thread`를 상속하거나 `Runnable`을 구현해 만들 수 있습니다.

```java
class Worker implements Runnable {
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName());
    }
}

Thread thread = new Thread(new Worker());
thread.start();
```

새 실행 흐름을 시작하려면 `run()`을 직접 호출하지 않고 `start()`를 호출해야 합니다.
상속 제약이 적고 작업과 실행 수단을 분리할 수 있는 `Runnable` 방식이 유연합니다.

## sleep(), join(), interrupt()

- `sleep(ms)`: 현재 실행 중인 스레드를 지정 시간 동안 일시 정지합니다.
- `join()`: 대상 스레드가 끝날 때까지 현재 스레드가 기다립니다.
- `interrupt()`: 대기 중인 스레드에 중단 요청을 보내고, `InterruptedException` 또는
  인터럽트 상태를 통해 협력적으로 종료할 기회를 줍니다.

```java
worker.start();
worker.join();
System.out.println("작업 완료 후 실행");
```

`interrupt()`는 스레드를 강제로 제거하는 기능이 아닙니다. 스레드 내부에서 요청을
확인하고 반복을 종료하거나 정리 작업을 수행해야 합니다.

## 멀티스레드 동기화

여러 스레드가 같은 값을 동시에 읽고 변경하면 실행 순서에 따라 결과가 달라지는 경쟁
상태가 발생합니다. 한 번에 하나의 스레드만 공유 자원의 임계 영역에 들어가도록
`synchronized`를 사용할 수 있습니다.

```java
synchronized (bank) {
    bank.saveMoney(3000);
}
```

동기화 범위가 너무 넓으면 동시 처리 성능이 떨어지고 교착 상태 위험도 생기므로,
공유 상태를 실제로 읽고 수정하는 최소 구간에 적용하는 것이 좋습니다. 같은 공유
자원에 접근하는 모든 코드가 동일한 잠금 객체를 사용해야 합니다.

## 실습 자료

- [전체 수업 노트와 예제 코드](./notes.txt)
- [실습 화면 전체 보기](./images/)

## 주요 실습 화면

| 주제 | 화면 |
| --- | --- |
| `try-catch` | [보기](./images/01_try-catch.PNG) |
| 표준 입력 | [보기](./images/02_systemin.PNG) |
| 반복 문자 입력 | [보기](./images/02_systemin_while.PNG) |
| `FileInputStream` | [보기](./images/03_fileinputstream.PNG) |
| `FileOutputStream` | [보기](./images/04_fileOutputStream.PNG) |
| `FileReader` | [보기](./images/05_fileReader.PNG) |
| `FileWriter` | [보기](./images/06_fileWriter.PNG) |
| BufferedStream 비교 | [보기](./images/07_bufferedStreamTest.PNG) |
| 멀티스레드 | [보기](./images/08_thread.PNG) |
| `sleep()` | [보기](./images/10_Thread_sleepMethod.PNG) |
| 공유 자원 동기화 | [보기](./images/11_동기화.PNG) |

## 실습 중 알게 된 점

- try-with-resources는 예외 발생 여부와 관계없이 입출력 자원을 안전하게 닫습니다.
- 텍스트에는 문자 스트림, 원시 바이너리 데이터에는 바이트 스트림이 적합합니다.
- BufferedStream은 입출력 호출 횟수를 줄여 파일 처리 성능을 개선합니다.
- 스레드 실행 순서는 보장되지 않으므로 출력 순서에 의존하면 안 됩니다.
- 인터럽트는 강제 종료가 아니라 스레드가 스스로 반응하는 중단 요청입니다.
- 동기화는 공유 자원의 불변 조건을 지키는 최소 임계 영역에 적용해야 합니다.

## 오늘의 한 줄

예외 처리는 실패를 안전하게 마무리하고, 동기화는 동시에 실행되는 작업이 공유 상태를 망가뜨리지 않게 한다.
