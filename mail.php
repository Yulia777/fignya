<?php
$post_data = $_POST;
$to = '1993belochka1993@list.ru';
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html\r\n";
$headers .= 'From: <order@salesgenerator.pro>' . "\r\n";

switch ($post_data['type']) {
    case 'callback-top':
        $subject = "\"ХРАНЕНИЕ_ШИН\" Сообщение с Лендинга - 'Форма заказа обратного звонка'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'get-tyres':
        $subject = "\"ХРАНЕНИЕ_ШИН\" Сообщение с Лендинга - 'ПРОВЕРИТЬ НАЛИЧИЕ МЕСТ НА СКЛАДЕ'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'left-widget-get-tyres':
        $subject = "\"ХРАНЕНИЕ_ШИН\" Сообщение с Лендинга - 'РАССЧИТАТЬ СТОИМОСТЬ'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p><p>Диаметр диска: <b>'.$post_data['diametr'].'</b></p><p>Хранение с: <b>'.$post_data['disk'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'second-get-tyres-form':
        $subject = "\"ХРАНЕНИЕ_ШИН\" Сообщение с Лендинга - 'СДАТЬ ШИНЫ В БЛИЖАЙШИЙ АВТОЦЕНТР'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'bronirovanie':
        $subject = "\"ХРАНЕНИЕ_ШИН\" Сообщение с Лендинга - 'ЗАБРОНИРОВАТЬ МЕСТО НА СКЛАДЕ'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'hranenie-shin':
        $subject = "\"ХРАНЕНИЕ_ШИН\" Сообщение с Лендинга - 'ОСТАВИТЬ ЗАЯВКУ НА ХРАНЕНИЕ'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'store-amount':
        $subject = "\"ХРАНЕНИЕ_ШИН\" Сообщение с Лендинга - 'ЗАПИСАТЬСЯ НА ШИНОМОНТАЖ В БЛИЖАЙШИЙ АВТОЦЕНТР'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'callback-bottom':
        $subject = "\"ХРАНЕНИЕ_ШИН\" Сообщение с Лендинга - 'Заказ обратного звонка из футера'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
}
