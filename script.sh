

HOST=localhost:3333/api

echo "Testando a comunicação com o server...."
test_conn=$(
    curl --silent http://localhost:3333/api
) 

echo $test_conn 

echo "\n"
echo "Criando um novo contacto..."

CREATE_CONTACT=$(
    curl --silent -X POST \
    --header "Content-Type: application/json" \
    --data-binary '{"email": "adriano.22teixeira@goncaz.ao"}' \
    $HOST/contacts
)

echo $CREATE_CONTACT 

echo "\n"

echo "Criando uma nova subscrição..."

CREATE_SUBSCRIPTIONS=$(
    curl --silent -X POST \
    --header "Content-Type: application/json" \
    --data-binary '{"email": "alzira.miguel@goncaz.ao"}' \
    $HOST/subscriptions
)

echo $CREATE_SUBSCRIPTIONS 
echo "\n"

echo "Criando uma novo pedido do portfolio..."

CREATE_SUBSCRIPTIONS_FOR_PORTFOLIO=$(
    curl --silent -X POST \
    --header "Content-Type: application/json" \
    --data-binary '{"email": "alzira.miguel@goncaz.ao"}' \
    $HOST/orders
)

echo $CREATE_SUBSCRIPTIONS_FOR_PORTFOLIO 

echo "\n"

echo "Criando um novo pedido de consultoria.."

CREATE_CONSULTING_ORDER=$(
    curl --silent -X POST \
    --header "Content-Type: application/json" \
    --data-binary '{"email": "alzira.miguel@goncaz.ao"}' \
    $HOST/orders
)

echo $CREATE_CONSULTING_ORDER 