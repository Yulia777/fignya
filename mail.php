<?php
$post_data = $_POST;
$to = 'order@salesgenerator.pro';
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html\r\n";
$headers .= 'From: <order@salesgenerator.pro>' . "\r\n";

switch ($post_data['type']) {
    case 'callback-top':
        $subject = "\"ШЫНОМОНТАЖ\" Сообщение с Лендинга - 'Форма заказа обратного звонка'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'get-tyres':
        $subject = "\"ШЫНОМОНТАЖ\" Сообщение с Лендинга - 'ЗАПИСАТЬСЯ НА ШИНОМОНТАЖ В УДОБНОЕ ВРЕМЯ'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'left-widget-get-tyres':
        $subject = "\"ШЫНОМОНТАЖ\" Сообщение с Лендинга - 'Запись на шиномонтаж'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'check-variants':
        $subject = "\"ШЫНОМОНТАЖ\" Сообщение с Лендинга - 'Подбор дисков по марке авто'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p><p>Марка автомобиля: <b>'.$post_data['car'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'tire-fitting':
        $subject = "\"ШЫНОМОНТАЖ\" Сообщение с Лендинга - 'Заявка на хранение шин'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'store-amount':
        $subject = "\"ШЫНОМОНТАЖ\" Сообщение с Лендинга - 'Запись на шиномонтаж'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'check-variants-two':
        $subject = "\"ШЫНОМОНТАЖ\" Сообщение с Лендинга - 'ПОСМОТРЕТЬ ВАРИАНТЫ ДЛЯ АВТО'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
    case 'callback-bottom':
        $subject = "\"ШЫНОМОНТАЖ\" Сообщение с Лендинга - 'Заказ обратного звонка из футера'";
        $message = '<p>Номер телефона клиента: <b>'.$post_data['phone'].'</b></p>';
        mail($to, $subject, $message, $headers);

        echo json_encode(['callback' => true]);
        break;
}
