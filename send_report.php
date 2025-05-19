<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

$nome = $_POST['share-name'] ?? '';
$email = $_POST['share-email'] ?? '';
$copy = $_POST['share-copy'] ?? '';
$percentD = $_POST['percentD'] ?? '0';
$percentI = $_POST['percentI'] ?? '0';
$percentS = $_POST['percentS'] ?? '0';
$percentC = $_POST['percentC'] ?? '0';
$perfil = $_POST['perfil'] ?? '';
$descricao = $_POST['descricao'] ?? '';
$fortes = $_POST['fortes'] ?? '';
$fracos = $_POST['fracos'] ?? '';
$top1_nome = $_POST['top1_nome'] ?? '';
$top2_nome = $_POST['top2_nome'] ?? '';
$top1_desc = $_POST['top1_desc'] ?? '';
$top2_desc = $_POST['top2_desc'] ?? '';
$top1_fortes = $_POST['top1_fortes'] ?? '';
$top2_fortes = $_POST['top2_fortes'] ?? '';
$top1_fracos = $_POST['top1_fracos'] ?? '';
$top2_fracos = $_POST['top2_fracos'] ?? '';

file_put_contents('debug_post.txt', print_r($_POST, true));

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.titan.email';
    $mail->SMTPAuth = true;
    $mail->Username = 'contato@radardorh.com.br';
    $mail->Password = '@Talentus2025';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('contato@radardorh.com.br', 'Radar do RH');
    
    if (!empty($email)) {
        $mail->addAddress($email, $nome);
    }
    if (!empty($copy)) {
        $mail->addAddress($copy);
    }

    $mail->isHTML(true);
    $mail->Subject = 'Seu Relatório DISC';

    $mail->CharSet = 'UTF-8';

    $mail->Body = '
    <div style="max-width:600px;margin:0 auto;font-family:Arial,sans-serif;background:#fff;padding:24px;border-radius:10px;">
        <h2 style="color:#2c3e50;">Seu Resultado DISC</h2>
        <p style="font-size:16px;">Olá, <b>' . htmlspecialchars($nome) . '</b>!</p>
        <p>Segue o resultado do seu teste DISC:</p>
        <div style="margin:24px 0;">
            <div style="margin-bottom:16px;">
                <span style="font-weight:bold;">DOMINÂNCIA</span>
                <div style="background:#e9ecef;border-radius:8px;height:18px;position:relative;">
                    <div style="background:#e53935;width:' . $percentD . '%;height:18px;border-radius:8px;"></div>
                    <span style="position:absolute;right:10px;top:0;color:#fff;background:#222;padding:2px 10px;border-radius:6px;font-size:13px;">' . $percentD . '%</span>
                </div>
            </div>
            <div style="margin-bottom:16px;">
                <span style="font-weight:bold;">INFLUÊNCIA</span>
                <div style="background:#e9ecef;border-radius:8px;height:18px;position:relative;">
                    <div style="background:#ffd600;width:' . $percentI . '%;height:18px;border-radius:8px;"></div>
                    <span style="position:absolute;right:10px;top:0;color:#fff;background:#222;padding:2px 10px;border-radius:6px;font-size:13px;">' . $percentI . '%</span>
                </div>
            </div>
            <div style="margin-bottom:16px;">
                <span style="font-weight:bold;">ESTABILIDADE</span>
                <div style="background:#e9ecef;border-radius:8px;height:18px;position:relative;">
                    <div style="background:#43a047;width:' . $percentS . '%;height:18px;border-radius:8px;"></div>
                    <span style="position:absolute;right:10px;top:0;color:#fff;background:#222;padding:2px 10px;border-radius:6px;font-size:13px;">' . $percentS . '%</span>
                </div>
            </div>
            <div style="margin-bottom:16px;">
                <span style="font-weight:bold;">CONFORMIDADE</span>
                <div style="background:#e9ecef;border-radius:8px;height:18px;position:relative;">
                    <div style="background:#1e88e5;width:' . $percentC . '%;height:18px;border-radius:8px;"></div>
                    <span style="position:absolute;right:10px;top:0;color:#fff;background:#222;padding:2px 10px;border-radius:6px;font-size:13px;">' . $percentC . '%</span>
                </div>
            </div>
        </div>
        <div style="background:#fafafa;padding:16px;border-radius:8px;">
            <h3 style="margin:0 0 8px 0;">1º Fator predominante: <span style="color:#1e88e5;">' . htmlspecialchars($top1_nome) . '</span></h3>
            <p>' . $top1_desc . '</p>
            <p><b>Pontos Fortes:</b> ' . $top1_fortes . '</p>
            <p><b>Pontos Fracos:</b> ' . $top1_fracos . '</p>
            <hr>
            <h3 style="margin:0 0 8px 0;">2º Fator mais presente: <span style="color:#e53935;">' . htmlspecialchars($top2_nome) . '</span></h3>
            <p>' . $top2_desc . '</p>
            <p><b>Pontos Fortes:</b> ' . $top2_fortes . '</p>
            <p><b>Pontos Fracos:</b> ' . $top2_fracos . '</p>
        </div>
        <p style="margin-top:32px;font-size:13px;color:#888;">Radar do RH</p>
    </div>
    ';

    $mail->send();
    echo 'Enviado!';
} catch (Exception $e) {
    echo 'Erro: ', $mail->ErrorInfo;
}
