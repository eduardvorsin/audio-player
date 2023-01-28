# 🎵 Аудио плеер
[Cсылка на демо](https://eduardvorsin.github.io/audio-player/)

![Аудио плеер](./images/audio-player.jpg)

## Технологии которые использовались при написании
![javascript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![react](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![typescript](https://img.shields.io/badge/typescript-%23323330.svg?style=for-the-badge&logo=typescript&logoColor=%233178c6)
![styled-components](https://img.shields.io/badge/%F0%9F%92%85%20styled--components-orange.svg?style=for-the-badge&color=DB7093)


## ⚙️ Использование
Пример как можно использовать компонент
```javascript
<AudioPlayer
	preload='metadata'
	src={tracks[trackIndex].src}
	trackName={tracks[trackIndex].trackName}
	trackArtist={tracks[trackIndex].trackArtist}
	sources={tracks[trackIndex].sources}
	showDownloadControl
	showPlaybackRateControl
	showLoopControl
	showNextAndPreviousControls
	onClickPrevious={handleClickPrevious}
	onClickNext={handleClickNext}
/>
```
## 📑 Пропсы
Ниже представлена таблица пропсов которые можно передать компоненту AudioPlayer
|            Пропс            |    Тип   | Дефолтное значение |                                    Описание                                   |
|:---------------------------:|:--------:|:------------------:|:-----------------------------------------------------------------------------:|
| trackName                   | string   |         ' '         | название аудиозаписи                                                          |
| trackArtist                 | string   |         ' '         | название исполнителя                                                          |
| sources                     | array    |        [' ']        | массив путей к аудио ресурсам,  значения массива помещаются  в теги `<source>`  |
| showDownloadControl         | boolean  |        false       | показать кнопку скачивания трека                                              |
| showPlaybackRateControl     | boolean  |        false       | показать кнопку управления  скоростью аудиозаписи                             |
| showLoopControl             | boolean  |        false       | показать кнопку цикличности аудио                                             |
| showNextAndPreviousControls | boolean  |        false       | показать кнопки переключения треков                                           |
| onClickPrevious             | function |      ( ) => { }     | коллбек который срабатывает при клике на кнопку предыдущего трека             |
| onClickNext                 | function |      ( ) => { }     | коллбек который срабатывает при клике на кнопку следующего трека              |

## 🛠️Как запустить проект
1. Клонировать это репозиторий с помощью команды:

`git clone https://github.com/eduardvorsin/audio-player.git`

2. Установить нужные зависимости используя следующую команду
```
$ npm i
```
3. Запустить приложение

Для запуска в режиме разработки
```
$ npm start
```
Для сборки build версии проекта
```
$ npm run build
```

## ✨ Особенности
### Доступны следущие функции плеера:
- Переключение треков
- Возможность выключить звук
- Скачивание текущего трека
- Замедление или ускорение проигрывания
- Циклично проигрывать текущую аудиозапись

### Для управления плеером с клавиатуры доступны следующие клавиши:
- `spaceBar`, `enter` - включить/выключить воспроизведение аудио
- `↑` - увеличить громкость
- `↓` -  понизить громкость
- `←` -  перемотать аудиозапись на 1 секунду назад
- `→` - перемотать аудиозапись на 1 секунду вперед
- `m` - переключение режима мута
- `l` - переключение режима цикличности
